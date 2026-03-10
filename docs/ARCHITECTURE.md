# ??? Arquitectura y Guía de Estilos

## Principios de Diseño
- **UI Premium:** Uso de `GlassCard.tsx` para estética translúcida (Glassmorphism).
- **Mobile First:** Todo componente debe ser 100% funcional en dispositivos móviles.

## Localización (i18n)
- **Región:** Uruguay (es-UY).
- **Moneda:** Símbolo `$` con separador de miles por punto (ej. $ 52.840).
- **Fechas:** Formato largo en español (ej. martes, 10 de marzo).

## Convenciones de Código
- **Componentes:** Deben ser `"use client"` si manejan estado o interactividad.
- **Iconos:** Usar exclusivamente `lucide-react`.
- **Colores Dinámicos:** La lógica de contraste (Texto blanco/negro) en el Heatmap debe respetarse según el umbral de intensidad > 40%.