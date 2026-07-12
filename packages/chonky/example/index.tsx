import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Typography from '@mui/material/Typography';
import { FileBrowser, FileNavbar, FileToolbar, FileList, FileContextMenu } from '../dist/chonky.esm.js';

// Minimal self-contained icon component so the example has no icon-package
// dependency. Real apps should pass their own `iconComponent`.
const EMOJI_ICONS: { [icon: string]: string } = {
  loading: '⏳',
  dropdown: '▾',
  folder: '📁',
  folderCreate: '📁',
  folderOpen: '📂',
  folderChainSeparator: '›',
  file: '📄',
  search: '🔍',
  openFiles: '📂',
  openParentFolder: '⬆️',
  selectAllFiles: '☑️',
  clearSelection: '✖️',
  sortAsc: '↑',
  sortDesc: '↓',
  toggleOn: '🔵',
  toggleOff: '⚪',
  list: '☰',
  compact: '≡',
  smallThumbnail: '🖼️',
  largeThumbnail: '🖼️',
  download: '⬇️',
  upload: '⬆️',
  copy: '📋',
  trash: '🗑️',
  dndDragging: '✊',
  dndCanDrop: '✅',
  dndCannotDrop: '🚫',
  symlink: '🔗',
  hidden: '👻',
};

const EmojiIcon = ({ icon, spin, className, style }: any) => (
  <span
    className={className}
    style={{ display: 'inline-block', width: '1.25em', textAlign: 'center', ...style }}
    title={typeof icon === 'string' ? icon : undefined}
  >
    {spin ? '⏳' : (EMOJI_ICONS[icon] ?? '📄')}
  </span>
);

const App = () => {
  const pathEntries = ['test', 'folder'];
  const [appendInfo, setAppendInfo] = React.useState('Test Info');
  React.useEffect(() => {
    var num = 0;
    setInterval(() => {
      setAppendInfo(`Test Info ${num}`);
      num++;
    }, 1000);
  }, []);

  return (
    <div style={{ height: 400 }}>
      <FileBrowser
        iconComponent={EmojiIcon}
        folderChain={pathEntries.map((name, idx) => ({
          id: `${idx}`,
          name,
        }))}
        files={[
          { id: 'zxc', name: 'My File.txt' },
          { id: 'jre', name: 'My Folder' },
        ]}
      >
        <FileNavbar />
        <FileToolbar>
          <div className="chonky-infoContainer">
            <Typography variant="body1" className="chonky-infoText">
              {appendInfo}
            </Typography>
          </div>
        </FileToolbar>
        <FileList />
        <FileContextMenu />
      </FileBrowser>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
