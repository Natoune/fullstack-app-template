import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.fullstack-app-template.frontend',
  appName: 'Fullstack App Template',
  webDir: './dist',
  server: {
    androidScheme: 'https',
    hostname: 'localhost:4200',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
