import { memo } from 'react';

const LoadingSpinner = memo(() => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gb-blue-50 via-white to-gb-orange-50 z-50 flex items-center justify-center">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gb-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gb-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative flex flex-col items-center gap-6">
        {/* Logo with pulse and rotation animation */}
        <div className="relative">
          {/* Spinning ring around logo */}
          <div className="absolute inset-0 -m-4">
            <div className="w-32 h-32 rounded-full border-4 border-transparent border-t-gb-blue-600 border-r-gb-orange-500 animate-spin"></div>
          </div>

          {/* Pulsing ring */}
          <div className="absolute inset-0 -m-6">
            <div className="w-36 h-36 rounded-full border-2 border-gb-blue-300/30 animate-ping"></div>
          </div>

          {/* Logo */}
          <div className="relative w-24 h-24 animate-pulse">
            <img
              src="/gyaanbyte-icon.png"
              alt="GyaanByte Labs"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gb-blue-600 to-gb-orange-500 bg-clip-text text-transparent animate-pulse">
            GyaanByte Labs
          </h2>

          {/* Animated dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-gb-blue-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-3 h-3 bg-gb-blue-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-3 h-3 bg-gb-orange-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>

          <p className="text-sm text-gray-600 animate-pulse">Loading your experience...</p>
        </div>
      </div>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
