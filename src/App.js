import {
  AmityUiKitProvider,
  AmityUiKitSocial,
} from "@amityco/ui-kit-open-source";
const userId = process.env.REACT_APP_USER_ID;
const apiKey = process.env.REACT_APP_API_KEY;
export default function App() {
  return (
    <div className="App">
      <AmityUiKitProvider
        key={userId}
        apiKey={apiKey}
        userId={userId}
        displayName={userId}
      >
        <AmityUiKitSocial />
      </AmityUiKitProvider>
    </div>
  );
}
