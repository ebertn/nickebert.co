<template>
  <section v-if="hasExperience" id="experience" class="p-8 sm:p-12 md:p-16 lg:p-24">
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div class="lg:col-span-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
            Experience
          </h2>
          <div
            class="w-[75px] h-[5px] mt-2 rounded-full"
            :style="{ backgroundColor: siteConfig.accentColor }"
          />
        </div>

        <div class="lg:col-span-8">
          <div class="relative">
            <div
              class="absolute left-1.5 top-8 bottom-8 w-px bg-gray-200"
              aria-hidden="true"
            />
            <div
              v-for="exp in siteConfig.experience"
              :key="`${exp.company}-${exp.title}`"
              class="relative pl-8 mb-10 last:mb-0"
            >
              <div
                class="absolute left-0 top-7 w-3 h-3 rounded-full ring-4 ring-white z-10"
                :style="{ backgroundColor: siteConfig.accentColor }"
                aria-hidden="true"
              />

              <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6 mb-4">
                  <div>
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-900">
                      {{ exp.title }}
                    </h3>
                    <p
                      class="text-base sm:text-lg"
                      :style="{ color: siteConfig.accentColor }"
                    >
                      {{ exp.company }}
                    </p>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-500 sm:whitespace-nowrap sm:pt-1">
                    {{ exp.dateRange }}
                  </span>
                </div>

                <ul class="space-y-2">
                  <li
                    v-for="bullet in exp.bullets"
                    :key="bullet"
                    class="flex items-start"
                  >
                    <span class="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0" />
                    <span class="text-sm sm:text-base text-gray-600">
                      {{ bullet }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '../config'

const hasExperience = computed(() => siteConfig.experience && siteConfig.experience.length > 0)
</script>
