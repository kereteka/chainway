import React from 'react';

const Card = ({ title, text, iconName }) => {
  const inlineStyles = {
    background:
      'linear-gradient(243deg, rgba(167, 243, 208, 0.10) 0%, rgba(255, 255, 255, 0.05) 100%)',
    backdropFilter: 'blur(2px)',
  };
  return (
    <article
      className="max-w-md mx-auto text-white overflow-hidden shadow-lg p-6"
      style={inlineStyles}
    >
      {iconName && (
        <div className="text-center mb-4">
          <i className={`${iconName} text-5xl text-gray-600`} />
        </div>
      )}
      <header>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
      </header>
      <section>
        <p className="opacity-[0.6]">{text}</p>
      </section>
    </article>
  );
};

export default Card;
