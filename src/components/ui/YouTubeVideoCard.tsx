"use client";

export default function YouTubeVideoCard() {
  return (
    <div className="w-full px-4 pt-4 pb-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)]">
          <video
            src="https://hecmqwtjkouwedvbpipn.supabase.co/storage/v1/object/public/Jxcob-%20Portafolio/H.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
        </div>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)]">
          <video
            src="https://hecmqwtjkouwedvbpipn.supabase.co/storage/v1/object/public/Jxcob-%20Portafolio/Hh%20Match.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
        </div>
      </div>
    </div>
  );
}
