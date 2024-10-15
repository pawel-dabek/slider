import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { title, showTitle } = attributes;

  return (
    <section {...useBlockProps.save({ className: 'card-slider-block' })}>
      <div className="card-slider-block__upper wrapper">
        {showTitle && <RichText.Content tagName="h1" className="card-slider-block__title" value={title} />}
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
            <InnerBlocks.Content />
          </div>
          <div className="card-slider-block__pagination"></div>
        </div>
      </div>
    </section>
  );
}
