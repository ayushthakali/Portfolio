import { isRouteHref, navigate } from "@/lib/router";

/**
 * <a> that navigates client-side for internal page routes and behaves as a
 * normal link for everything else (external URLs, files, mailto, #hash).
 */
function Link({ href, onClick, target, download, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target ||
      download ||
      !isRouteHref(href)
    ) {
      return;
    }
    event.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      target={target}
      download={download}
      onClick={handleClick}
      {...props}
    />
  );
}

export default Link;
