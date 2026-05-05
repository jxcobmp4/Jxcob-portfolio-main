export default function YouTubeVideoCard() {
  return (
    <div className="w-full px-4 pt-4 pb-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)]">
          <iframe
            src="https://www.youtube.com/embed/qRYWFarSoLM?rel=0&modestbranding=1"
            title="Video horizontal 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/kTICDjDTU7c?si=cU4dMcB5l6xBEhpj"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
