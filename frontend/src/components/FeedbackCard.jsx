function FeedbackCard({ feedback }) {
    // Format timestamp to be more readable
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    
    return (
      <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <span className="text-blue-700 font-medium">
              {feedback.fullname.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{feedback.fullname}</h3>
            <p className="text-sm text-gray-500">{feedback.email}</p>
            {feedback.timestamp && (
              <p className="text-xs text-gray-400">{formatDate(feedback.timestamp)}</p>
            )}
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-gray-700">{feedback.message}</p>
        </div>
      </div>
    )
  }
  
  export default FeedbackCard