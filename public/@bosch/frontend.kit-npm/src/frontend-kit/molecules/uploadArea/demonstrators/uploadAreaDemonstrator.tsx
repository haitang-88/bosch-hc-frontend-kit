import * as React from 'react';
import { UploadArea, UploadAreaProps } from '../uploadArea';

/* eslint-disable react/jsx-props-no-spreading */
const UploadAreaDemonstrator: React.FunctionComponent<UploadAreaProps> = ({
  ...data
}) => {
  return (
    <>
      <script
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("load", (event) => {
              const uploadInput = document.getElementById('upload-input-4');
              uploadInput.addEventListener('filesAdded', (e) => {
                console.log('files added', e.detail.files);
              });
            }); 
          `,
        }}
      />
      <UploadArea
        inputId={data.inputId}
        items={data.items}
        labelBefore={data.labelBefore}
        labelFileUpload={data.labelFileUpload}
        labelAfter={data.labelAfter}
      />
    </>
  );
};

export default UploadAreaDemonstrator;
