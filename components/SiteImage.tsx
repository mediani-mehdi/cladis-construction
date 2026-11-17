"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** Keep the original public image available if the image optimizer fails. */
export default function SiteImage(props: ImageProps) {
  const [failedSource, setFailedSource] = useState<ImageProps["src"] | null>(null);

  return (
    <Image
      {...props}
      unoptimized={props.unoptimized || failedSource === props.src}
      onError={(event) => {
        setFailedSource(props.src);
        props.onError?.(event);
      }}
    />
  );
}
