import { useState } from "react"
import ScreenWrapper from '../components/ScreenWrapper'
import SortableCardsBlock from "../components/template-page/SortableCardsBlock";
import { ModuleEditor } from "../editor/ModuleEditor";
import { quests } from '../mocks/quest';

type ModuleMode = 'list' | 'edit';

export default function TemplatesCreatePage() {
  const [moduleMode, setModuleMode] = useState<ModuleMode>('list');
  const [hideLayers, setHideLayers] = useState<boolean>(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [items, setItems] = useState([
    { id: "1", title: "Card 1" },
    { id: "2", title: "Card 2" },
    { id: "3", title: "Card 3" },
    { id: "4", title: "Card 4" },
    { id: "5", title: "Card 5" },
    { id: "6", title: "Card 6" },
  ]);

  const data = quests[0];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1d1d1d]">
      <div className="flex gap-2">



        <div className="overflow-hidden m-4 mr-0 h-[calc(100vh-16px*2)] w-[calc(100vw/2.6-20px)]">
          {/* світчер для блоків вибір/редагування модуля */}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className={`switcher mb-4`}
              onClick={() =>
                setModuleMode(prev => (prev === 'edit' ? 'list' : 'edit'))
              }
            >
              <span className="switcher-indicator" />
              <svg
                className={moduleMode === 'edit' ? 'active' : ''}
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"></path></svg>
              <svg
                className={moduleMode === 'list' ? 'active' : ''}
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.423 22.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5 19V5zm.616 1q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v8.325q-.238-.102-.479-.181q-.24-.08-.521-.14V5.615q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h6.808q0 .256.026.508t.088.492zm3.049-3.683q.22-.221.22-.549t-.222-.548t-.549-.22t-.548.222t-.22.549t.222.547t.549.22t.548-.221m0-3.77q.22-.22.22-.548t-.222-.548t-.549-.22t-.548.221t-.22.55t.222.547t.549.22t.548-.221m0-3.77q.22-.221.22-.548t-.222-.548t-.549-.22t-.548.221t-.22.549t.222.548t.549.22t.548-.221m2.527 3.721h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zm0 7.54h2.004q.143-.287.318-.528q.175-.24.382-.473h-2.704z"></path></svg>
            </button>
            <button
              type="button"
              className={`switcher mb-4`}
              onClick={() =>
                setHideLayers(prev => !prev)
              }
            >
              <span className="switcher-indicator" />
              <svg
                className={hideLayers ? 'active' : ''}
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 256 256"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"><path d="M 16,80 127.94695,15.974538"></path><path d="m 16,80 112,64"></path><path d="m 16,176 112,64"></path><path d="M 128,16 240,80"></path><path d="M 128,144 240,80"></path><path d="M 128,240 240,176"></path><path d="m 16,128 112,64"></path><path d="M 128,192 239.94695,128.0019"></path><path d="M 16,128 58.031909,104.01298"></path><path d="M 16,176 58.032661,151.99127"></path><path d="m 239.94694,128.00191 -41.9796,-23.98708"></path><path d="M 240,176 197.96608,151.99056"></path></g></svg>
              <svg
                className={hideLayers ? '' : 'active'}
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-Mterlimit="10"><path d="m.5 17l2.308 1.364m1.778 1.05L11.5 23.5l11-6.5m-22-3l4.194 2.478"></path><path d="M6.471 17.529L11.5 20.5l11-6.5m-22-3l6.079 3.592"></path><path d="M8.357 15.643L11.5 17.5l11-6.5m-12.257 2.757l1.257.743l11-6.5l-11-6.5L.5 8l7.965 4.707M.5 23.5L22.75 1.25"></path></g></svg>
            </button>
          </div>

          <div className="flex gap-2 h-full">
            {/* блок для вибору модуля */}
            {
              moduleMode === 'edit' ?
                <div className="min-w-0 flex-1 overflow-y-auto">
                  <ModuleEditor module={data.steps[0]} />
                  {/* <input type="text" />
                  <button>save</button> */}
                </div>
                : <div className={`
                      min-w-0 flex-1 overflow-y-auto transition-all duration-500
                      ${hideLayers ? "grid grid-cols-3" : "grid grid-cols-2"}
                      gap-3 pr-2 pb-[80px]
                      `}>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                  <div className="test-card"></div>
                </div>
            }

            {/* список обраних модулів */}
            <SortableCardsBlock
              data={items}
              setData={setItems}
              hideLayers={hideLayers}
            />
          </div>
        </div>

        {/* блок для рендеру модуля */}
        <div className="rounded-lg bg-[#181818] m-4 h-[calc(100vh-16px*2)] w-[calc(100vw-100vw/2.6-20px)]">
          <ScreenWrapper
            data={data['steps'][stepIndex]?.data}
            onNextStep={() => setStepIndex(prev => prev + 1)}
            Step={data?.steps[stepIndex]?.component} />
        </div>
      </div>
    </div>
  )
}
