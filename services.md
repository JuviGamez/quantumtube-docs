# Services

## YouTube Service

Located in `src/services/youtube.js`, handles all YouTube API interactions:

### Key Functions

- `getChannelDetails(channelId)`
- `getChannelVideos(channelId, pageToken)`
- `searchVideos(query)`
- `getVideoDetails(videoId)`

### Usage Example
```javascript
const videoData = await getVideoDetails(videoId);
const channelInfo = await getChannelDetails(channelId);
```

## Storage Service

Manages local data persistence and state:

### Features

- Watch history tracking
- User preferences
- Cached responses
- Session management

### Implementation

Uses a combination of:
- localStorage
- sessionStorage
- IndexedDB (for larger datasets)

## Event Service

Located in `src/utils/events.js`, provides application-wide event handling:

### Key Features

- Custom event emission
- Cross-component communication
- State synchronization
- Error broadcasting

### Usage
```javascript
eventEmitter.on('refreshVideos', callback);
eventEmitter.emit('refreshVideos');
```


## Authentication Service

Handles user authentication and session management:

### Features

- Token management
- Session persistence
- API key validation
- Error handling
# Theme & Styling

## Theme Configuration

Located in `src/theme.js`, defines global styling variables:

### Color Palette
- Primary: #9147ff (Bright purple)
- Secondary: #772ce8 (Deep purple)
- Background: #1a1a2e (Dark purple background)
- Surface: #2a2a4a (Lighter purple surface)
- Text: #efeff1 (Light text)

### Transitions
- Default: 0.3s cubic-bezier
- Slow: 0.6s cubic-bezier

## Styling Implementation

### Emotion Integration

Using @emotion/styled for component styling:
```javascript
const StyledComponent = styled.div color: ${props => props.theme.colors.primary}; transition: ${props => props.theme.transitions.default};;
```


### Global Styles

Located in `src/index.css`:
- Reset styles
- Base typography
- Scrollbar customization
- Global animations

### Component-Specific Styles

- Modular styling approach
- Theme-aware components
- Responsive design patterns
- Animation integration

## Custom Components

### Plyr Integration
Custom video player styling in `src/styles/plyr-shorts.css`:
- Custom controls
- Progress bar styling
- Mobile optimization
