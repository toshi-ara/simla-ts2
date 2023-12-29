library(MASS)

n <- 5
rho <- 0.8
sim <- 2000
digit <- 3    # digit for json file

Sigma <- matrix(rho, n, n)
diag(Sigma) <- 1

seed <- 1234

set.seed(seed)
dat <- mvrnorm(n = sim, mu = rep(0, n), Sigma = Sigma)


## save results as typescript file
nr <- nrow(dat)

sink("../RandMultiNorm.ts")
cat("export const randMultiNorm = [\n")
for (i in seq_len(nr - 1)) {
    cat("  [", paste(round(dat[i, ], digit), collapse = ", "), "],\n")
}
cat("  [", paste(round(dat[nr, ], digit), collapse = ", "), "]\n")
cat("];\n")
sink()

