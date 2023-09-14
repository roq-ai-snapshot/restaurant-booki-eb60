interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ["View the restaurant's profile", "View the restaurant's menu", 'Reserve a table'],
  ownerAbilities: [
    'Manage restaurant profile',
    'Manage tables in restaurant',
    'Invite chefs to application',
    'View and manage table reservations',
    'Update table status',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/630dd34d-dd54-4b87-be6c-bd1cae4c20d4',
};
