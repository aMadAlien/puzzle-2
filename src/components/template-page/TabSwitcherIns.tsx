import TabsSwitcher from "../../elements/TabsSwitcher"
import { ModuleMode } from "../../pages/TemplatesCreatePage"

export default function TabSwitcherIns({ moduleMode, setModuleMode }: {
  moduleMode: ModuleMode,
  setModuleMode: (mode: ModuleMode) => void
}
) {
  return (
    <TabsSwitcher
      tabs={[
        {
          id: "list", content: (
            <svg
              className={moduleMode === 'list' ? 'active' : ''}
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.423 22.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5 19V5zm.616 1q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v8.325q-.238-.102-.479-.181q-.24-.08-.521-.14V5.615q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h6.808q0 .256.026.508t.088.492zm3.049-3.683q.22-.221.22-.549t-.222-.548t-.549-.22t-.548.222t-.22.549t.222.547t.549.22t.548-.221m0-3.77q.22-.22.22-.548t-.222-.548t-.549-.22t-.548.221t-.22.55t.222.547t.549.22t.548-.221m0-3.77q.22-.221.22-.548t-.222-.548t-.549-.22t-.548.221t-.22.549t.222.548t.549.22t.548-.221m2.527 3.721h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zm0 7.54h2.004q.143-.287.318-.528q.175-.24.382-.473h-2.704z"></path></svg>
          )
        },
        {
          id: "edit", content: (
            <svg
              className={moduleMode === 'edit' ? 'active' : ''}
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"></path></svg>
          )
        },
        {
          id: "saved", content: (
            <svg
              className={moduleMode === 'saved' ? 'active' : ''}
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></path></svg>
          )
        },
      ]}
      activeTab={moduleMode}
      onChange={e => setModuleMode(e as ModuleMode)}
    />
  )
}