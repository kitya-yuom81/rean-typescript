const myPromise = new Promise<string>((resolve, reject) => {
  const success = true;
  if (success) resolve("✅ Done successfully");
  else reject("❌ Something went wrong");
});
