'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('')
  return (
    <>
      {publicId && (
        <CldImage
          width='270'
          height='180'
          src={publicId}
          sizes='100vw'
          alt='Description of my image'
        />
      )}
      <CldUploadWidget
        uploadPreset='faxetref'
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: '#464040',
              sourceBg: '#292222',
              windowBorder: '#c7a49f',
              tabIcon: '#cc6600',
              inactiveTabIcon: '#E8D5BB',
              menuIcons: '#ebe5db',
              link: '#ffb107',
              action: '#ffcc00',
              inProgress: '#99cccc',
              complete: '#78b3b4',
              error: '#ff6666',
              textDark: '#4C2F1A',
              textLight: '#D8CFCF',
            },
            fonts: {
              default: null,
              "'Merriweather', serif": {
                url: 'https://fonts.googleapis.com/css?family=Merriweather',
                active: true,
              },
            },
          },
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') {
            return
          }
          const info = result.info as CloudinaryResult
          setPublicId(info.public_id)
        }}
      >
        {({ open }) => {
          function handleOnClick(e: { preventDefault: () => void }) {
            e.preventDefault()
            open()
          }
          return (
            <button className='btn btn-primary' onClick={handleOnClick}>
              Upload an Image
            </button>
          )
        }}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage
