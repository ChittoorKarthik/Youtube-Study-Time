#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define forn for(int i=0;i<n;i++)
typedef vector<int> vi;
// 1.PRECOMPUTATION
// 2.BINARY SEARCH (on answer)
// 3.BFS/DFS
// 4.DP (1d, 2d)
// 5.GREEDY
// 6.STACK/QUEUE
// 7.SORTING
// 8.TWO POINTERS
int main(){
string s;
cin>>s;
int n=s.size();

int balls=0;
for(int i=0;i<n;i++){
    if(s[i]=='B'){
        balls++;
    }
}

if(balls>(n+1)/2){
    cout<<"-1\n";
    return 0;
}

int ans=INT_MAX;
for(int start=0;start<=n+1-2*balls;i++){
    int moves=0,placed=0;
    for(int j=start;placed<=balls;j+=2){
        if(s[j]=='.'){
            moves++;
        }
        placed++;
    }
    ans=min(ans,moves);
}

if(ans==INT_MAX) ans=-1;

cout<<"ans="<<ans<<"\n";


return 0;
}