import { __ } from '@wordpress/i18n';

import { useBlockProps, InnerBlocks, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const { title, showTitle } = attributes;

  const toggleAttribute = (attributeName) => setAttributes({ [attributeName]: !attributes[attributeName] });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Ustawienia bloku', 'hero-block')}>
          <ToggleControl checked={!!showTitle} label={__('Włącz tytuł', 'hero-block')} onChange={() => toggleAttribute('showTitle')} />
        </PanelBody>
      </InspectorControls>

      <section {...useBlockProps({ className: 'card-slider-block' })}>
        <div className="card-slider-block__upper wrapper">
          {showTitle && <RichText tagName="h1" className="card-slider-block__title" value={title} onChange={(value) => setAttributes({ title: value })} placeholder="Wpisz tytuł tutaj..." />}
          <div className="card-slider-block__arrows">
            <button className="card-slider-block__arrow card-slider-block__arrow--prev">
              <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 18.5H6M6 18.5L15 9.5M6 18.5L15 27.5" stroke="#434343" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="card-slider-block__arrow card-slider-block__arrow--next">
              <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18.5H30M30 18.5L21 27.5M30 18.5L21 9.5" stroke="#434343" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="wrapper">
          <div className="swiper">
            <div className="swiper-wrapper">
              <InnerBlocks />
            </div>
            <div className="card-slider-block__pagination">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
