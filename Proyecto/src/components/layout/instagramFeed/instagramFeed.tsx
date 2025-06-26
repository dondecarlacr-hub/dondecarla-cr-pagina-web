import React from "react";

const InstagramFeed: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl shadow-xl border border-gray-300 bg-white ${className}`}
    >
      <iframe
        src="https://widget.taggbox.com/289471?website=1"
        className="h-[77vh] md:h-[56.5vh]"
        style={{ width:"100%", overflow:"auto", border: "none" }}
        loading="lazy"
        title="Instagram Feed"
      />
    </div>
  );
};

export default InstagramFeed;
{/* <iframe src="https://widget.taggbox.com/289471?website=1" style="width:100%;height:100%;overflow:auto;border:none;"></iframe> */}