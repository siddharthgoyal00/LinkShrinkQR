interface QRFormProps {
    url: string;
    onUrlChange: (url:string)=>void;
    onSubmit: (e:React.FormEvent)=> void;
}
export function QRForm ({url, onUrlChange, onSubmit}:QRFormProps) {
    return (
        <form onSubmit={onSubmit} className="mb-8">
            <div className="flex gap-4">
                <input type="url"
                value={url}
                onChange={(e)=> {onUrlChange(e.target.value)}} 
                placeholder="Enter your URL here"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900">Generate QR</button>
            </div>
        </form>
    )
}