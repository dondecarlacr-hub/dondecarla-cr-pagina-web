import { useEffect } from "react";

const useTaggbox = (widgetId: string) => {
  useEffect(() => {
    if (!widgetId || document.getElementById("taggbox-script")) return;

    const script = document.createElement("script");
    script.id = "taggbox-script";
    script.src = "https://widget.taggbox.com/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptElement = document.getElementById("taggbox-script");
      scriptElement?.remove();
    };
  }, [widgetId]);
};

export default useTaggbox;
