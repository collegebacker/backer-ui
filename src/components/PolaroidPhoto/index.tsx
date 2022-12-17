import React from "react";
import styles from "./styles.module.scss";

import gsap from "gsap";
import { stringToGradient, isMobile } from "../../utils";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  fundName?: string;
  imageSrc?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PolaroidPhoto: React.FC<Props> = (props) => {
  const photoRef = React.useRef<HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setImageSrc(props.imageSrc);
  }, [props.imageSrc]);

  return (
    <div
      className={`${styles.polaroidWrapper} ${props.className}`}
      style={props.style}
    >
      {/* {!imageSrc && <div className={styles.uploadPhotoPlaceholderImage} />} */}
      <div
        ref={photoRef}
        className={styles.polaroid}
        onMouseMove={(e) => {
          if (isMobile()) return;

          const elBounds = e.currentTarget.getBoundingClientRect();
          const elWidth = elBounds.width;
          const elHeight = elBounds.height;

          const xPos = (e.clientX - elBounds.left) / elWidth;
          const yPos = (e.clientY - elBounds.top) / elHeight;

          const xDeg = xPos * 20 - 10;
          const yDeg = yPos * 20 - 10;

          gsap.to(photoRef.current, {
            rotateX: yDeg,
            rotateY: xDeg,
            scale: 1.05,
            duration: 0.2,
          });
        }}
        onMouseLeave={(e) => {
          if (isMobile()) return;

          gsap.to(e.currentTarget, {
            duration: 0.5,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            ease: "Power3.easeOut",
          });
        }}
      >
        {!imageSrc && (
          <div className={styles.uploadPhoto}>
            <input
              type="file"
              accept="image/*"
              id="upload-polaroid-input"
              multiple={false}
              title={imageSrc ? "Change photo" : "Upload photo"}
            />
            <div className={styles.uploadPhotoPlaceholderImage} />
          </div>
        )}

        <div
          className={styles.photo}
          style={{
            backgroundImage: `url(${imageSrc}), ${stringToGradient(
              props.fundName
            )}`,
          }}
        />
      </div>
    </div>
  );
};

PolaroidPhoto.defaultProps = {
  className: "",
  style: {},
  fundName: "",
} as Partial<Props>;

export default PolaroidPhoto;
