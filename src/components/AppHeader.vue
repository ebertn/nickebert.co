<template>
  <header
    id="header"
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300"
  >
    <nav class="max-w-7xl mx-auto px-8 py-4">
      <ul class="flex items-center gap-8 justify-center">
        <li>
          <a
            href="#about"
            class="text-gray-700 hover:text-black transition-colors font-medium"
          >
            About
          </a>
        </li>
        <li v-if="hasProjects">
          <a
            href="#projects"
            class="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Projects
          </a>
        </li>
        <li v-if="hasExperience">
          <a
            href="#experience"
            class="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Experience
          </a>
        </li>
        <li v-if="hasEducation">
          <a
            href="#education"
            class="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Education
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { siteConfig } from '../config'

const headerRef = ref<HTMLElement>()

const hasProjects = computed(() => siteConfig.projects && siteConfig.projects.length > 0)
const hasExperience = computed(() => siteConfig.experience && siteConfig.experience.length > 0)
const hasEducation = computed(() => siteConfig.education && siteConfig.education.length > 0)

const handleScroll = () => {
  if (headerRef.value) {
    if (window.scrollY > 100) {
      headerRef.value.classList.add('bg-white/80', 'backdrop-blur-sm')
    } else {
      headerRef.value.classList.remove('bg-white/80', 'backdrop-blur-sm')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
