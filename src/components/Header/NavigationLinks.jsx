// NavigationLinks.jsx
export default function NavigationLinks({ links, className }) {
  return (
    <>
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={className}
        >
          {item.name}
        </a>
      ))}
    </>
  );
}
