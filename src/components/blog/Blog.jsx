import React, { useContext, useEffect } from 'react';
import './blog.css';
import Image1 from '../../assets/blog-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';
import { useHookView } from '../../hooks/useHookView';
import { MenuContext } from '../../context/MenuContext';

const Blog = () => {
  // For sections
  const { ref, styleOption, inView } = useHookView({});

  // For header
  const { ref: ref2, inView: inView2 } = useHookView({
    triggerOnce: false,
  });
  const contextVal = useContext(MenuContext);

  useEffect(() => {
    if (inView2) {
      contextVal.setCurrSection('blog');
    }
  }, [inView2]);

  return (
    <section
      className={`section blog container ${styleOption}`}
      ref={ref}
      id="blog"
    >
      <h3 ref={ref2} className="section__title">
        Latest Posts
      </h3>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#home">
              <span className="blog__category">Reviews</span>
            </a>
            <a href="#home">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              5 Best App Development Tool for Your Projects
            </h3>
            <div className="blog__meta">
              <span>09 February, 2022</span>
              <div className="blog__dot">.</div>
              <span>Bolby</span>
            </div>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#home">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="#home">
              <img src={Image2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Common Misconceptions About Payment</h3>
            <div className="blog__meta">
              <span>07 February, 2022</span>
              <div className="blog__dot">.</div>
              <span>Bolby</span>
            </div>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#home">
              <span className="blog__category">Business</span>
            </a>
            <a href="#home">
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              3 Things to know about startup business
            </h3>
            <div className="blog__meta">
              <span>05 February, 2022</span>
              <div className="blog__dot">.</div>
              <span>Bolby</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
