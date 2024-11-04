<template>
  <div class="container mx-auto py-10">
    <div class="prose mx-auto">
      <ContentList
        path="/articles"
      >
        <template v-slot="{ list }">
          <div class="space-y-5">
            <div v-for="article in list" :key="article._path">
              <h1 class="text-xl mb-0">
                <NuxtLink :to="article._path">
                  {{ article.title }}
                </NuxtLink>
              </h1>
              <p
                v-if="article.description"
                class="my-0"
              >{{ article.description }}</p>
              <div
                v-if="article.date"
                class="text-gray-500 text-sm"
              >{{ article.date }}</div>
            </div>
          </div>
        </template>
      </ContentList>
    </div>
  </div>
</template>
