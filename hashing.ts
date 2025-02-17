const passwordHash = await Bun.password.hash("password", {
    algorithm: "bcrypt",
    cost: 10
});

const result = await Bun.password.verify("password", passwordHash, "bcrypt");
console.log(`Hash: ${passwordHash}`);
console.log(result);