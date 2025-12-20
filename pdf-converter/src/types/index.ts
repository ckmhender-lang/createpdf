export interface PDFDocument {
  id: string;
  name: string;
  uri: string;
  size: number;
  createdAt: Date;
  thumbnail?: string;
}

export interface ImageFile {
  id: string;
  uri: string;
  name: string;
  size: number;
}

export type RootStackParamList = {
  MainTabs: undefined;
  PDFViewer: { uri: string; name: string };
};

export type MainTabParamList = {
  Home: undefined;
  ImageToPDF: undefined;
  MergePDF: undefined;
  Documents: undefined;
};
