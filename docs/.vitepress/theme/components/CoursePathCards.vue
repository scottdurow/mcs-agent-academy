<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import { coursePathGroups } from "../coursePaths";

const props = defineProps<{ course: string }>();

const group = computed(() =>
  coursePathGroups.find((entry) => entry.course === props.course),
);
</script>

<template>
  <div
    v-if="group"
    class="course-path-cards"
    :aria-label="`${group.course} course paths`"
    role="group"
  >
    <a
      v-for="path in group.paths"
      :key="path.root"
      class="course-path-card"
      :href="withBase(path.home)"
    >
      <span v-if="path.tag" class="course-path-card__tag">{{ path.tag }}</span>
      <span class="course-path-card__name">{{ path.label }}</span>
      <span class="course-path-card__description">{{ path.description }}</span>
      <ul class="course-path-card__highlights">
        <li v-for="highlight in path.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
      <span class="course-path-card__cta">Start this path →</span>
    </a>
  </div>
</template>

<style scoped>
.course-path-cards {
  display: grid;
  margin: 1.5rem 0 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.course-path-card {
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}

.course-path-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

.course-path-card__tag {
  align-self: flex-start;
  margin-bottom: 0.75rem;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.course-path-card__name {
  color: var(--vp-c-text-1);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
}

.course-path-card__description {
  margin-top: 0.4rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.course-path-card__highlights {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.85rem;
  line-height: 1.6;
}

.course-path-card__highlights li {
  position: relative;
  padding-left: 1.25rem;
}

.course-path-card__highlights li::before {
  position: absolute;
  left: 0;
  color: var(--vp-c-brand-1);
  content: "✓";
}

.course-path-card__cta {
  margin-top: auto;
  padding-top: 1.25rem;
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .course-path-cards {
    grid-template-columns: 1fr;
  }
}
</style>
