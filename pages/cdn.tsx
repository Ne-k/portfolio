import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import styles from '../styles/cdn.module.css'; 
import Image from 'next/image';

interface Props {
  files: string[];
}

const CdnPage: NextPage<Props> = ({ files }) => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const container = img.parentElement as HTMLDivElement;
    container.style.paddingBottom = `${aspectRatio * 100}%`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_AUTH_TOKEN_HERE ${process.env.API_KEY}`,
        },
        body: JSON.stringify({ password }),
      });
      if (response.ok) {
        setAuthenticated(true);
      } else {
        setPassword('');
        alert('Invalid password');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while authenticating');
    }
  };

  if (!authenticated) {
    return (
      <div className={styles['form-signin']}>
        <h2 className={styles['form-signin-heading']}>Please sign in</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles['form-labels']}>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles['form-input']} />
          </label>
          <button type="submit" className={styles['form-button']}>
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className={styles['button-container']}>
        <a href="https://gofile.io/d/5dwCoJ" className={styles['redirect-button']}>
          Videos
        </a>
      </div>
      <div className={styles['image-grid']}>
        {files.map((file) => (
      <div key={file} className={styles['image-container']} style={{}}>
      {file.endsWith('.JPG') || file.endsWith('.PNG') ? (
        <Image src={`/cdn/${file}`} alt={file} onLoad={handleImageLoad} style={{ aspectRatio: '1 / 1' }} />
      ) : (
        <video src={`/cdn/${file}`} controls style={{ aspectRatio: '1 / 1' }} />
      )}
      <a href={`/cdn/${file}`} download className={styles['download-button']}>
        Download
      </a>
    </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dirPath = path.join(process.cwd(), 'public', 'cdn');
  try {
    const files = fs.readdirSync(dirPath);
    return {
      props: {
        files,
      },
    };
  } catch (error) {
    return {
      props: {
        files: [],
      },
    };
  }
};

export default CdnPage;