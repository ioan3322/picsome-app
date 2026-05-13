import { useState } from "react"

export interface ImageItem {
  id: string | number
  src: {
    medium: string
  }
  alt?: string
  width: number
  height: number
  photographer: string
  photographer_url: string
}

export interface DataImageItem {
  id: number,
  width: number,
  height: number,
  url: string,
  photographer: string,
  photographer_url: string,
  photographer_id: 742240889,
  avg_color: "#A5A0A6",
  src: {
    original: string,
    large2x: string,
    large: string,
    medium: string,
    small: string,
    portrait: string,
    landscape: string,
    tiny: string
  },
  liked: boolean
  alt: string

}



