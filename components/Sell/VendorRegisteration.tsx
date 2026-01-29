"use client";

export default function VendorRegistration() {
  return (
    <section className="bg-[#F4F9EE] py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">

          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              Vendor Registration
            </h2>
            <p className="mt-3 text-black/60 max-w-xl mx-auto">
              Create your store account and start selling with us.
            </p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-black/10 px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                required
              />
            </div>

            {/* Store Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2">
                Store Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Store Name"
                className="w-full rounded-xl border border-black/10 px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                required
              />
              <p className="mt-2 text-xs text-black/50">
                Your store URL will be:{" "}
                <span className="text-[#4CAF50] font-medium">
                  takemarts.com/store/your-store
                </span>
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-black/10 px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full rounded-xl border border-black/10 px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                required
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-8 flex justify-end">
              <button
                type="submit"
                className="px-10 py-4 rounded-full text-white font-semibold
                           bg-[#FF8A00] hover:bg-[#4CAF50]
                           transition-all duration-300 shadow-lg"
              >
                Register Store
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
