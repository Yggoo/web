<template>
  <div class="min-h-screen bg-(--ui-bg)">
    <header class="bg-(--ui-color-primary-50) py-6">
      <UContainer class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-(--ui-color-primary-700)">🐣 Yggoo Admin</h1>
        <UButton to="/" variant="soft" color="secondary">Tilbage til butik</UButton>
      </UContainer>
    </header>

    <UContainer class="py-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold">Produkter</h2>
        <UButton icon="i-lucide-plus" @click="openCreate">Tilføj produkt</UButton>
      </div>

      <UTable
        :data="products ?? []"
        :columns="columns"
        :loading="status === 'pending'"
        class="w-full"
      />
    </UContainer>

    <!-- Create / Edit Modal -->
    <UModal v-model:open="formOpen">
      <template #content>
        <div class="p-6 space-y-4">
          <h3 class="text-lg font-semibold">
            {{ editing ? 'Rediger produkt' : 'Tilføj produkt' }}
          </h3>

          <UFormField label="Navn">
            <UInput v-model="form.name" placeholder="Produktnavn" class="w-full" />
          </UFormField>

          <UFormField label="Beskrivelse">
            <UTextarea v-model="form.description" placeholder="Kort beskrivelse" class="w-full" />
          </UFormField>

          <UFormField label="Pris (kr)">
            <UInput v-model="form.price" type="number" placeholder="0" class="w-full" />
          </UFormField>

          <UFormField label="Billede">
            <div v-if="imagePreview || form.image" class="mb-2">
              <img :src="imagePreview || form.image" alt="Preview" class="h-16 w-16 rounded-full object-cover" />
            </div>
            <input
              ref="fileInputRef"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              class="block w-full text-sm text-(--ui-text-muted) file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-(--ui-bg-elevated) file:text-(--ui-text) hover:file:bg-(--ui-bg-accented) cursor-pointer"
              @change="onFileSelect"
            />
          </UFormField>

          <p v-if="uploadError" class="text-sm text-(--ui-text-error)">{{ uploadError }}</p>

          <div class="flex justify-end gap-2 pt-2">
            <UButton variant="ghost" color="neutral" @click="formOpen = false">Annuller</UButton>
            <UButton :loading="saving" @click="saveProduct">
              {{ editing ? 'Gem' : 'Opret' }}
            </UButton>
          </div>
        </div>
      </template>
    </UModal>

    <!-- Delete Confirmation Modal -->
    <UModal v-model:open="deleteOpen">
      <template #content>
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-2">Slet produkt</h3>
          <p class="text-(--ui-text-muted) mb-6">
            Er du sikker på, at du vil slette <strong>{{ deleteTarget?.name }}</strong>?
          </p>
          <div class="flex justify-end gap-2">
            <UButton variant="ghost" color="neutral" @click="deleteOpen = false">Annuller</UButton>
            <UButton color="error" :loading="deleting" @click="deleteProduct">Slet</UButton>
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'

const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')
const UPopover = resolveComponent('UPopover')

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const { data: products, refresh, status } = await useFetch<Product[]>('/api/products')

const columns: TableColumn<Product>[] = [
  {
    accessorKey: 'image',
    header: 'Billede',
    cell: ({ row }) => {
      return h(UPopover, {
        mode: 'hover',
      }, {
        default: () => h('img', {
          src: row.original.image,
          alt: row.original.name,
          class: 'h-10 w-10 rounded-full object-cover cursor-pointer',
        }),
        content: () => h('img', {
          src: row.original.image,
          alt: row.original.name,
          class: 'w-64 h-64 object-contain rounded',
        }),
      })
    },
  },
  {
    accessorKey: 'name',
    header: 'Navn',
  },
  {
    accessorKey: 'description',
    header: 'Beskrivelse',
    meta: {
      class: {
        td: 'max-w-xs truncate text-(--ui-text-muted)',
      },
    },
  },
  {
    accessorKey: 'price',
    header: 'Pris',
    cell: ({ row }) => `${row.original.price} kr`,
  },
  {
    id: 'actions',
    header: '',
    meta: {
      class: {
        td: 'text-right',
      },
    },
    cell: ({ row }) => {
      const items = [
        [{
          label: 'Rediger',
          icon: 'i-lucide-pencil',
          onSelect: () => openEdit(row.original),
        }],
        [{
          label: 'Slet',
          icon: 'i-lucide-trash',
          color: 'error' as const,
          onSelect: () => confirmDelete(row.original),
        }],
      ]

      return h('div', { class: 'flex justify-end' }, [
        h(UDropdownMenu, {
          items,
        }, {
          default: () => h(UButton, {
            icon: 'i-lucide-ellipsis-vertical',
            variant: 'ghost',
            color: 'neutral',
          }),
        }),
      ])
    },
  },
]

const formOpen = ref(false)
const editing = ref<Product | null>(null)
const saving = ref(false)
const form = reactive({
  name: '',
  description: '',
  price: 0,
  image: '',
})

const fileInputRef = ref<HTMLInputElement | null>(null)
const pendingFile = ref<File | null>(null)
const imagePreview = ref('')
const uploadError = ref('')

const deleteOpen = ref(false)
const deleteTarget = ref<Product | null>(null)
const deleting = ref(false)

function resetForm() {
  form.name = ''
  form.description = ''
  form.price = 0
  form.image = ''
  pendingFile.value = null
  imagePreview.value = ''
  uploadError.value = ''
  if (fileInputRef.value) fileInputRef.value.value = ''
}

function onFileSelect(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    pendingFile.value = file
    imagePreview.value = URL.createObjectURL(file)
  }
}

function openCreate() {
  editing.value = null
  resetForm()
  formOpen.value = true
}

function openEdit(product: Product) {
  editing.value = product
  resetForm()
  Object.assign(form, {
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
  })
  formOpen.value = true
}

async function uploadImage(): Promise<string | null> {
  if (!pendingFile.value) return null

  const body = new FormData()
  body.append('files', pendingFile.value)

  const result = await $fetch<{ pathname: string }[]>('/api/upload', {
    method: 'POST',
    body,
  })

  return `/uploads/${result[0].pathname}`
}

async function saveProduct() {
  saving.value = true
  uploadError.value = ''
  try {
    const uploadedPath = await uploadImage()
    const imageUrl = uploadedPath || form.image

    if (!imageUrl) {
      uploadError.value = 'Vælg venligst et billede'
      return
    }

    const body = {
      name: form.name,
      description: form.description,
      price: Number(form.price),
      image: imageUrl,
    }

    if (editing.value) {
      await $fetch(`/api/products/${editing.value.id}`, {
        method: 'PUT',
        body,
      })
    } else {
      await $fetch('/api/products', {
        method: 'POST',
        body,
      })
    }
    formOpen.value = false
    await refresh()
  } finally {
    saving.value = false
  }
}

function confirmDelete(product: Product) {
  deleteTarget.value = product
  deleteOpen.value = true
}

async function deleteProduct() {
  if (!deleteTarget.value) return
  deleting.value = true
  try {
    if (deleteTarget.value.image.startsWith('/uploads/')) {
      const pathname = deleteTarget.value.image.replace('/uploads/', '')
      await $fetch(`/api/upload/${pathname}`, { method: 'DELETE' }).catch(() => {})
    }
    await $fetch(`/api/products/${deleteTarget.value.id}`, { method: 'DELETE' })
    deleteOpen.value = false
    await refresh()
  } finally {
    deleting.value = false
  }
}
</script>
