<template>
  <UDashboardGroup>
    <UDashboardPanel id="products">
      <template #header>
        <UDashboardNavbar title="🍂 Yggoo Admin" :toggle="false">
          <template #right>
            <UButton
              label="Tilbage til butik"
              icon="i-lucide-store"
              to="/"
              color="neutral"
              variant="ghost"
            />
            <UButton label="Tilføj produkt" icon="i-lucide-plus" @click="openCreate" />
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <UContainer>
          <UTable :data="products ?? []" :columns="columns" :loading="status === 'pending'">
            <template #image-cell="{ row }">
              <UAvatar
                :src="row.original.image"
                :alt="row.original.name"
                size="xl"
                provider="none"
              />
            </template>

            <template #price-cell="{ row }">
              <UBadge :label="`${row.original.price} kr`" color="secondary" variant="soft" />
            </template>

            <template #actions-cell="{ row }">
              <UDropdownMenu :items="getRowActions(row.original)">
                <UButton
                  icon="i-lucide-ellipsis-vertical"
                  variant="ghost"
                  color="neutral"
                  aria-label="Produkthandlinger"
                />
              </UDropdownMenu>
            </template>

            <template #empty>
              <UEmpty
                icon="i-lucide-package-open"
                title="Ingen produkter"
                description="Tilføj det første produkt for at komme i gang."
                :actions="[
                  {
                    label: 'Tilføj produkt',
                    icon: 'i-lucide-plus',
                    onClick: openCreate,
                  },
                ]"
              />
            </template>
          </UTable>
        </UContainer>
      </template>
    </UDashboardPanel>

    <UModal
      v-model:open="formOpen"
      :title="editing ? 'Rediger produkt' : 'Tilføj produkt'"
      description="Udfyld produktets oplysninger."
      :ui="{ footer: 'justify-end' }"
    >
      <template #body>
        <UForm
          id="product-form"
          :state="form"
          :validate="validateProduct"
          class="space-y-4"
          @submit="saveProduct"
        >
          <UFormField name="name" label="Navn" required>
            <UInput v-model="form.name" placeholder="Produktnavn" />
          </UFormField>

          <UFormField name="description" label="Beskrivelse">
            <UTextarea
              v-model="form.description"
              placeholder="Kort beskrivelse"
              autoresize
              :maxrows="6"
            />
          </UFormField>

          <UFormField name="price" label="Pris (kr)" required>
            <UInputNumber v-model="form.price" :min="0" :step="1" placeholder="0" />
          </UFormField>

          <UFormField
            name="image"
            label="Billede"
            description="JPEG, PNG, WebP eller GIF. Maks. 10 MB."
            required
          >
            <UFileUpload
              v-model="pendingFile"
              accept="image/jpeg,image/png,image/webp,image/gif"
              label="Vælg eller slip et produktbillede"
              description="Billedet bliver vist som produktets primære billede."
            />
          </UFormField>

          <UAlert
            v-if="formError"
            :description="formError"
            icon="i-lucide-circle-alert"
            color="error"
            variant="subtle"
          />
        </UForm>
      </template>

      <template #footer="{ close }">
        <UButton label="Annuller" variant="outline" color="neutral" @click="close" />
        <UButton
          :label="editing ? 'Gem' : 'Opret'"
          type="submit"
          form="product-form"
          :loading="saving"
        />
      </template>
    </UModal>

    <UModal
      v-model:open="deleteOpen"
      title="Slet produkt"
      :description="deleteDescription"
      :ui="{ footer: 'justify-end' }"
    >
      <template #footer="{ close }">
        <UButton label="Annuller" variant="outline" color="neutral" @click="close" />
        <UButton label="Slet" color="error" :loading="deleting" @click="deleteProduct" />
      </template>
    </UModal>
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { DropdownMenuItem, FormError, TableColumn } from "@nuxt/ui";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductForm {
  name: string;
  description: string;
  price: number | null;
  image: string;
}

const toast = useToast();
const { data: products, refresh, status } = await useFetch<Product[]>("/api/products");

const columns: TableColumn<Product>[] = [
  { accessorKey: "image", header: "Billede" },
  { accessorKey: "name", header: "Navn" },
  { accessorKey: "description", header: "Beskrivelse" },
  { accessorKey: "price", header: "Pris" },
  { id: "actions", header: "" },
];

const formOpen = ref(false);
const editing = ref<Product | null>(null);
const saving = ref(false);
const form = reactive<ProductForm>({
  name: "",
  description: "",
  price: 0,
  image: "",
});
const pendingFile = ref<File | null>(null);
const formError = ref("");

const deleteOpen = ref(false);
const deleteTarget = ref<Product | null>(null);
const deleting = ref(false);
const deleteDescription = computed(() =>
  deleteTarget.value
    ? `Er du sikker på, at du vil slette ${deleteTarget.value.name}?`
    : "Er du sikker på, at du vil slette produktet?",
);

function getRowActions(product: Product): DropdownMenuItem[][] {
  return [
    [
      {
        label: "Rediger",
        icon: "i-lucide-pencil",
        onSelect: () => openEdit(product),
      },
    ],
    [
      {
        label: "Slet",
        icon: "i-lucide-trash",
        color: "error",
        onSelect: () => confirmDelete(product),
      },
    ],
  ];
}

function validateProduct(state: ProductForm): FormError[] {
  const errors: FormError[] = [];

  if (!state.name.trim()) {
    errors.push({ name: "name", message: "Angiv et produktnavn" });
  }

  if (state.price === null || !Number.isInteger(state.price) || state.price < 0) {
    errors.push({ name: "price", message: "Prisen skal være et positivt heltal" });
  }

  if (!pendingFile.value && !state.image) {
    errors.push({ name: "image", message: "Vælg et produktbillede" });
  }

  return errors;
}

function resetForm() {
  form.name = "";
  form.description = "";
  form.price = 0;
  form.image = "";
  pendingFile.value = null;
  formError.value = "";
}

function openCreate() {
  editing.value = null;
  resetForm();
  formOpen.value = true;
}

function openEdit(product: Product) {
  editing.value = product;
  resetForm();
  Object.assign(form, {
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
  });
  formOpen.value = true;
}

async function uploadImage(): Promise<string | null> {
  if (!pendingFile.value) return null;

  const body = new FormData();
  body.append("files", pendingFile.value);

  const result = await $fetch<{ pathname: string }[]>("/api/upload", {
    method: "POST",
    body,
  });

  return `/uploads/${result[0].pathname}`;
}

async function saveProduct() {
  saving.value = true;
  formError.value = "";

  try {
    const uploadedPath = await uploadImage();
    const imageUrl = uploadedPath || form.image;
    const body = {
      name: form.name,
      description: form.description,
      price: form.price ?? 0,
      image: imageUrl,
    };

    if (editing.value) {
      await $fetch(`/api/products/${editing.value.id}`, {
        method: "PUT",
        body,
      });
    } else {
      await $fetch("/api/products", {
        method: "POST",
        body,
      });
    }

    formOpen.value = false;
    await refresh();
    toast.add({
      title: editing.value ? "Produktet er opdateret" : "Produktet er oprettet",
      color: "success",
      icon: "i-lucide-circle-check",
    });
  } catch (error) {
    const requestError = error as {
      data?: { message?: string };
      message?: string;
    };
    formError.value =
      requestError.data?.message || requestError.message || "Kunne ikke gemme produktet";
  } finally {
    saving.value = false;
  }
}

function confirmDelete(product: Product) {
  deleteTarget.value = product;
  deleteOpen.value = true;
}

async function deleteProduct() {
  if (!deleteTarget.value) return;

  deleting.value = true;
  try {
    if (deleteTarget.value.image.startsWith("/uploads/")) {
      const pathname = deleteTarget.value.image.replace("/uploads/", "");
      await $fetch(`/api/upload/${pathname}`, { method: "DELETE" }).catch(() => {});
    }

    await $fetch(`/api/products/${deleteTarget.value.id}`, { method: "DELETE" });
    deleteOpen.value = false;
    await refresh();
    toast.add({
      title: "Produktet er slettet",
      color: "success",
      icon: "i-lucide-circle-check",
    });
  } finally {
    deleting.value = false;
  }
}
</script>
