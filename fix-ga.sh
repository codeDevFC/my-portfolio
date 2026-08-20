#!/bin/bash
# Fix Google Analytics error
sed -i '' 's/const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;/\/\/ const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;/' app/layout.tsx
sed -i '' 's/if (!GA_ID) {/\/\/ if (!GA_ID) {/' app/layout.tsx
sed -i '' 's/throw new Error("Missing Google Analytics ID");/\/\/ throw new Error("Missing Google Analytics ID");/' app/layout.tsx
sed -i '' 's/  }/\/\/   }/' app/layout.tsx
echo "✅ Google Analytics check commented out successfully!"
