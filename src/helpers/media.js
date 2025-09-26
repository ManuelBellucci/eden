// src/utils/media.js

export const FALLBACK_IMG = '/image-error.png'
export const ERROR_IMG = '/image-error.png'

/**
 * Convierte un array mixto (strings u objetos) en objetos { url, alt }
 * @param {Array<string|{url?: string, alt?: string}>} arr
 * @returns {{url: string, alt?: string}[]}
 */
export function normalizeToObjs (arr) {
  if (!Array.isArray(arr)) return []
  return arr
    .map((x, i) =>
      typeof x === 'string'
        ? { url: x, alt: `image ${i + 1}` }
        : (x || {})
    )
    .filter(o => !!o.url)
}

/**
 * Devuelve al menos una imagen (fallback si no hay ninguna válida)
 * @param {Array<string|{url?: string, alt?: string}>} arr
 * @param {string} [fallback=FALLBACK_IMG]
 * @returns {{url: string, alt?: string}[]}
 */
export function withFallback (arr, fallback = FALLBACK_IMG) {
  const norm = normalizeToObjs(arr)
  return norm.length ? norm : [{ url: fallback, alt: 'Anteprima non disponibile' }]
}

/**
 * onError seguro para <img>, cambia a imagen de error y evita bucles
 * @param {import('react').SyntheticEvent<HTMLImageElement, Event>} e
 * @param {string} [fallback=ERROR_IMG]
 */
export function safeOnErrorSwap (e, fallback = ERROR_IMG) {
  const el = e.currentTarget
  if (el?.dataset?.fallbackApplied === '1') return // evita loop si falla el fallback
  el.src = fallback
  if (el.dataset) el.dataset.fallbackApplied = '1'
}
