const ModernImage = ({
  src,
  srcSet = `${src}.webp`,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={srcSet} type={type} />
      <img src={src} {...delegated} />
    </picture>
  );
};

export default ModernImage;
