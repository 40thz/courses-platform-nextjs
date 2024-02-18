import styles from './styles.module.scss';
import { Close } from '@components/shared/Icons/Close';
import { FileLink } from '@components/shared/Icons/FileLink';
import { Typography } from '@ui/Typography';
import { ChangeEvent, useRef, useState } from 'react';

export const FileUpload = ({ onChange }: { onChange: (value: File) => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const uploadFile = (e: any) => {
    if (file) return;
    uploadInputRef.current && uploadInputRef.current.click();
  };

  const removeFile = (e: any) => {
    setFile(null);
    setName('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file) {
      setName(file[0]?.name);
      setFile(file[0]);
      onChange(file[0]);
    }
  };

  return (
    <>
      <div onClick={uploadFile} className={styles.fileUpload}>
        <FileLink />

        <Typography component="p" type="body" variant="mega" color="black">
          {name ? name : 'Выберите файл'}
        </Typography>
        {file && <Close onClick={removeFile} />}
      </div>
      <input onChange={handleChange} ref={uploadInputRef} type="file" hidden />
    </>
  );
};
