let smimagecomponent = `
@charset"UTF-8";
/** 
* FUNCION SPACING
* DESC: Devuelve un tamaño estandar, por defecto son 24px si no se pasan args.
* IMPL: margin-bottom: spacing(small)
*/
/**
* FUNCION FONTS
* DESC: Devuelve una fuente estandar, por defecto es Lato si no se pasan args.
* IMPL: font-family: fonts(lato);
*/
/**
* FUNCION FONT-TYPES
* DESC: Devuelve un tipo fuente estandar, por defecto es Lato si no se pasan args.
* IMPL: font-weight: font-type(title);
* EXTRA: Rellenar el mapa con tamaños de letra (desconozco cuales son) para estandarizar aun mas
*/
/**
* FUNCION transltate-media-condition
* DESC: Devuelve una condicion de medio.
* IMPL: @media 
*/
/**
* FUNCION MEDIA-QUERY
* DESC: Devuelve una fuente estandar, por defecto es Lato si no se pasan args.
* IMPL: @include media("retina", "<minWidth");
*/
/** 
* FUNCION SPACING
* DESC: Devuelve un tamaño estandar, por defecto son 24px si no se pasan args.
* IMPL: margin-bottom: spacing(small)
*/
/**
* FUNCION FONTS
* DESC: Devuelve una fuente estandar, por defecto es Lato si no se pasan args.
* IMPL: font-family: fonts(lato);
*/
/**
* FUNCION FONT-TYPES
* DESC: Devuelve un tipo fuente estandar, por defecto es Lato si no se pasan args.
* IMPL: font-weight: font-type(title);
* EXTRA: Rellenar el mapa con tamaños de letra (desconozco cuales son) para estandarizar aun mas
*/
/**
* FUNCION transltate-media-condition
* DESC: Devuelve una condicion de medio.
* IMPL: @media 
*/
/**
* FUNCION MEDIA-QUERY
* DESC: Devuelve una fuente estandar, por defecto es Lato si no se pasan args.
* IMPL: @include media("retina", "<minWidth");
*/
/**
* MIXIN MEDIA
* Estandariza las media-queries in-line que no entren en el estandar
* Imprescindible añadir el min o max width ya que no se puede estandarizar.
* Pensar manera de implementarlo.
* Se utilizaría de esta manera:
* .container {
        @include media("retina", "min-width: ") {
            color: $white;
        }

        // Tamaño no registrado
        @include media("retina", "min-width: 840px") {
            color: $white;
        }
    }
*/
/**
* MIXIN (mobile-xs|mobile|tablet|desktop|desktop-xl)
* Estandariza las media-queries in-line que entren en el estandar
* Se utilizaría de esta manera:
* .container {

        margin-top: spacing(large);

*       @include tablet{
*           margin-top: 48px;
*           color: $white;
*       }
*
*       @include desktop {
*           margin-top: 64px;
*           color: $white;
*       }
*   }
*/
/**
* Mixin flexBox
* Establece un estandar para el flex-box (Puede que se me pasen cosas, echar un ojo)
* Como se usa:
*   @include flexBox(row, left, center);
*   @include flexBox(row, left, center, devices(desktop)); -- Esta cambiaria el flow al llegar al pto. de ruptura
*/
/**
* Mixin flexBox
* Establece un estandar para el flex-box (Puede que se me pasen cosas, echar un ojo)
* Como se usa:
*   @include flexBox(row, left, center);
*   @include flexBox(row, left, center, devices(desktop)); -- Esta cambiaria el flow al llegar al pto. de ruptura
*/
.image {
  height: 200px;
  margin: auto; }
  .imageWrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-bottom: 64px; }

.circle {
  width: 300px;
  height: 300px;
  padding-top: 20px;
  background-color: var(--bg);
  border-radius: 100%; }

.small-circle {
  position: absolute !important;
  top: 25px;
  left: 25px;
  width: 250px;
  height: 250px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--bg);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center; }

.shadow-2 {
  position: relative;
  box-shadow: 4px 2px 4px 0 rgba(0, 0, 0, 0.015), 8px 4px 8px 0 rgba(0, 0, 0, 0.035), 16px 8px 16px 0 rgba(0, 0, 0, 0.065);
  z-index: 0; }

.shadow-2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-shadow: -4px -2px 4px 0 rgba(255, 255, 255, 0.05), -8px -4px 8px 0 rgba(255, 255, 255, 0.15), -16px -8px 16px 0 rgba(255, 255, 255, 0.25);
  z-index: -1; }

.shadow-2-inset {
  position: relative;
  box-shadow: inset 1px 0px 1px 0 rgba(0, 0, 0, 0.015), inset 2px 1px 2px 0 rgba(0, 0, 0, 0.035), inset 4px 2px 4px 0 rgba(0, 0, 0, 0.065);
  z-index: 0; }

.shadow-2-inset::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-shadow: inset -1px 0px 1px 0 rgba(255, 255, 255, 0.05), inset -2px -1px 2px 0 rgba(255, 255, 255, 0.15), inset -4px -2px 4px 0 rgba(255, 255, 255, 0.25);
  z-index: -1; }

`;
export default smimagecomponent;