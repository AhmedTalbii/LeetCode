class Bank {
  constructor(balance) { this.b = balance; }
  v(a) { return a > 0 && a <= this.b.length; }

  transfer(a1, a2, m) {
    if (!this.v(a1) || !this.v(a2) || this.b[a1-1] < m) return false;
    this.b[a1-1] -= m; this.b[a2-1] += m; return true;
  }
  deposit(a, m) { if (!this.v(a)) return false; this.b[a-1] += m; return true; }
  withdraw(a, m) { if (!this.v(a) || this.b[a-1] < m) return false; this.b[a-1] -= m; return true; }
}
