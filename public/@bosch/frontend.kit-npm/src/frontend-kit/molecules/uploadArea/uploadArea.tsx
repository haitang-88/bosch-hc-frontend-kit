import * as React from 'react';
import { Icon } from '../../atoms/icon/icon';
import { Notification } from '../../atoms/notification/notification';
import { Button } from '../../atoms/button/button';
import { ProgressIndicator } from '../../atoms/progressIndicator/progressIndicator';

interface UploadAreaProps {
  labelBefore?: string;
  labelFileUpload?: string;
  labelAfter?: string;
  errorNotification?: string;
  inputId?: string;
  items: Item[];
}

interface Item {
  fileName: string;
  fileSize: string;
  state: 'upload' | 'uploading' | 'uploaded' | 'error';
  uploadErrorNotification: string;
}

const UploadArea: React.FunctionComponent<UploadAreaProps> = ({
  labelBefore,
  labelFileUpload,
  labelAfter,
  errorNotification,
  inputId = 'upload-input',
  items,
}) => {
  return (
    <div className="m-upload-area">
      <div className="m-upload-area__field">
        <div className="m-upload-area__description">
          <Icon iconName="upload" />
          {labelBefore}
          <input
            id={inputId}
            className="m-upload-area__input"
            name="upload-input"
            type="file"
            multiple
          />
          <label htmlFor={inputId}>{labelFileUpload}</label>
          {labelAfter}
        </div>
      </div>
      {errorNotification && (
        <Notification variant="text" type="error">
          {errorNotification}
        </Notification>
      )}
      <div className="m-upload-area__items">
        {items.map((item) => {
          return (
            <div className="m-upload-area__item">
              <div className="m-upload-area__item-details">
                <div className="m-upload-area__item-description">
                  <Icon iconName="document-plain" />
                  <div>
                    <strong className="-size-m">{item.fileName}</strong>
                    <br />
                    <span className="-size-s">{item.fileSize}</span>
                  </div>
                </div>
                <div className="m-upload-area__item-cta">
                  {item.state === 'upload' && (
                    <Button label="Upload" mode="integrated" icon="upload" />
                  )}
                  {item.state === 'error' && (
                    <Button label="Try again" mode="integrated" icon="reset" />
                  )}
                  <Button mode="integrated" icon="delete" aria-label="delete" />
                </div>
              </div>
              {item.state === 'uploading' && (
                <div className="m-upload-area__progress">
                  <ProgressIndicator type="determinate" progress={25} />
                  <div className="-size-s m-upload-area__progress-percentage">
                    25%
                  </div>
                </div>
              )}
              {item.state === 'error' && item.uploadErrorNotification && (
                <Notification variant="text" type="error">
                  {item.uploadErrorNotification}
                </Notification>
              )}
            </div>
          );
        })}
        {items.length > 0 && (
          <div className="m-upload-area__cta">
            <Button label="Upload all" mode="secondary" icon="upload" />
            <Button label="Remove all" mode="tertiary" icon="delete" />
          </div>
        )}
      </div>
    </div>
  );
};

export { UploadArea };
export type { UploadAreaProps };
