const Logo = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 28 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="7" cy="7.5" rx="7" ry="7.5" fill="white" />
      <ellipse cx="21" cy="7.5" rx="7" ry="7.5" fill="white" />
    </svg>
  );
};

export default Logo;
