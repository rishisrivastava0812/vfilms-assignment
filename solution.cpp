#include <bits/stdc++.h>

using namespace std;

int main() {
    vector<string> lines(9);
    for (int i = 0; i < 9; i++) getline(cin, lines[i]);

    vector<string> digit_bins(10);
    for (int i = 0; i < 10; i++) {
        string pat = lines[0].substr(i * 4, 3) + lines[1].substr(i * 4, 3) + lines[2].substr(i * 4, 3);
        string bin = "";
        for (char c : pat) {
            bin += (c != ' ') ? '1' : '0';
        }
        digit_bins[i] = bin;
    }

    map<string, string> sym_map;
    vector<string> ops = {"OR", "AND", "NOT", "(", ")"};
    for (int i = 0; i < 5; i++) {
        string pat = lines[3].substr(i * 4, 3) + lines[4].substr(i * 4, 3) + lines[5].substr(i * 4, 3);
        sym_map[pat] = ops[i];
    }

    // expression
    vector<string> parts[3];
    for (int r = 0; r < 3; r++) {
        stringstream ss(lines[6 + r]);
        string token;
        while (ss >> token) {
            parts[r].push_back(token);
        }
    }

    int n = parts[0].size();
    vector<string> expr;
    for (int i = 0; i < n; i++) {
        string pat = parts[0][i] + parts[1][i] + parts[2][i];
        expr.push_back(sym_map[pat]);
    }

    // parse into tokens
    vector<string> tokens;
    string current_num = "";
    for (auto &s : expr) {
        if (s.size() == 1 && isdigit(s[0])) {
            current_num += s;
        } else {
            if (!current_num.empty()) {
                tokens.push_back(current_num);
                current_num = "";
            }
            tokens.push_back(s);
        }
    }
    if (!current_num.empty()) tokens.push_back(current_num);

    // evaluation functions
    auto get_binary = [&](string num) -> string {
        string res = "";
        for (char c : num) {
            int d = c - '0';
            res += digit_bins[d];
        }
        return res;
    };

    auto bitwise_and = [&](string a, string b) -> string {
        int len = max(a.size(), b.size());
        while (a.size() < len) a = "0" + a;
        while (b.size() < len) b = "0" + b;
        string res = "";
        for (int i = 0; i < len; i++) {
            res += (a[i] == '1' && b[i] == '1') ? '1' : '0';
        }
        return res;
    };

    auto bitwise_or = [&](string a, string b) -> string {
        int len = max(a.size(), b.size());
        while (a.size() < len) a = "0" + a;
        while (b.size() < len) b = "0" + b;
        string res = "";
        for (int i = 0; i < len; i++) {
            res += (a[i] == '1' || b[i] == '1') ? '1' : '0';
        }
        return res;
    };

    auto bitwise_not = [&](string a) -> string {
        string res = "";
        for (char c : a) {
            res += (c == '0') ? '1' : '0';
        }
        return res;
    };

    // recursive evaluation
    function<string()> eval_expr;
    function<string()> eval_term;
    function<string()> eval_factor;
    function<string()> eval_primary;

    int pos = 0;

    eval_primary = [&]() -> string {
        if (tokens[pos] == "(") {
            pos++;
            string res = eval_expr();
            pos++; // )
            return res;
        } else {
            string num = tokens[pos];
            pos++;
            return get_binary(num);
        }
    };

    eval_factor = [&]() -> string {
        if (tokens[pos] == "NOT") {
            pos++;
            string val = eval_factor();
            return bitwise_not(val);
        } else {
            return eval_primary();
        }
    };

    eval_term = [&]() -> string {
        string res = eval_factor();
        while (pos < tokens.size() && tokens[pos] == "OR") {
            pos++;
            string right = eval_factor();
            res = bitwise_or(res, right);
        }
        return res;
    };

    eval_expr = [&]() -> string {
        string res = eval_term();
        while (pos < tokens.size() && tokens[pos] == "AND") {
            pos++;
            string right = eval_term();
            res = bitwise_and(res, right);
        }
        return res;
    };

    string result_bin = eval_expr();

    // to decimal
    long long result = 0;
    for (char c : result_bin) {
        result = result * 2 + (c - '0');
    }
    cout << result << endl;

    return 0;
}
