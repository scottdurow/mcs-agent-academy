<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const COURSE_MESSAGE =
  "This course is in preview. Content may change and some steps might not work as intended.";
const MISSION_MESSAGE =
  "This mission is in preview. Content may change and some steps might not work as intended.";

// Course landing pages live directly under a section folder, e.g.
// `commander-preview/index.md`. Missions sit one level deeper.
const COURSE_LEVEL_PATH = /^[^/]+\/index\.md$/;

const { frontmatter, page } = useData();

const message = computed(() => {
  const value = frontmatter.value.preview;
  if (typeof value === "string" && value.trim() !== "") return value.trim();
  if (value !== true) return null;
  return COURSE_LEVEL_PATH.test(page.value.relativePath)
    ? COURSE_MESSAGE
    : MISSION_MESSAGE;
});
</script>

<template>
  <div v-if="message" class="preview-banner" role="note">
    <span class="preview-banner-icon" aria-hidden="true">⚠️</span>
    <div>
      <p class="preview-banner-title">Preview</p>
      <p class="preview-banner-message">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.preview-banner {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  border: 1px solid var(--vp-c-warning-2, var(--vp-c-divider));
  border-radius: 8px;
  background-color: var(--vp-c-warning-soft, var(--vp-c-bg-soft));
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  line-height: 1.5;
}

.preview-banner-icon {
  font-size: 1.1rem;
  line-height: 1.4;
}

.preview-banner-title {
  margin: 0;
  font-weight: 600;
}

.preview-banner-message {
  margin: 0.25rem 0 0;
}
</style>
