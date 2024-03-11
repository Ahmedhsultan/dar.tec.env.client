import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dar.mobile',
  appName: 'darSurvayTracker',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
