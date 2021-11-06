let sminputcomponent = `
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
.smInput__primary {
  background: transparent;
  border: none;
  /* margin-bottom: 40px; */
  width: 100%;
  margin-bottom: 16px;
  /* padding-bottom: 10px; */
  outline: none;
  color: #a4a4a4;
  font-weight: 600;
  font-size: 14px; }

.neumorph {
  width: 100%;
  height: 5px;
  background-color: var(--bg);
  font-size: 14px;
  font-weight: bold;
  color: #a4a4a4;
  margin-bottom: 96px; }

.shadow {
  position: relative;
  box-shadow: 2px 1px 2px 0 rgba(0, 0, 0, 0.025), 4px 2px 4px 0 rgba(0, 0, 0, 0.025), 8px 4px 8px 0 rgba(0, 0, 0, 0.05), 16px 8px 16px 0 rgba(0, 0, 0, 0.05), 32px 16px 32px 0 rgba(0, 0, 0, 0.05), 64px 32px 64px 0 rgba(0, 0, 0, 0.05);
  z-index: 0; }

.shadow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-shadow: -2px -1px 2px 0 rgba(255, 255, 255, 0.4), -4px -2px 4px 0 rgba(255, 255, 255, 0.4), -8px -4px 8px 0 rgba(255, 255, 255, 0.4), -16px -8px 16px 0 rgba(255, 255, 255, 0.4), -32px -16px 32px 0 rgba(255, 255, 255, 0.4), -64px -32px 64px 0 rgba(255, 255, 255, 0.4);
  z-index: -1; }

::placeholder {
  color: #a4a4a4; }

`;
export default sminputcomponent;