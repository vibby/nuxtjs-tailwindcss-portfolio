<template>
  <div class="container mx-auto py-10">
    <article class="prose dark:prose-invert mx-auto">
      <ContentDoc>
        <template v-slot="{ doc }">
          <h1 class="mb-1">{{ doc.title }}</h1>
          <p
            v-if="doc.description"
            class="my-0"
          >{{ doc.description }}</p>
          <div
            v-if="doc.date"
            class="text-gray-500 text-sm"
          >{{ doc.date }}</div>
          <ContentRenderer :value="doc" />
        </template>
        <template #not-found>
          404 Not Found
        </template>
      </ContentDoc>
    </article>
  </div>
</template>
