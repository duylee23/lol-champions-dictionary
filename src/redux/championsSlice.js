import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchChampions = createAsyncThunk('champions/fetchChampions', async () => {
  const res = await fetch('https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const championArray = Object.values(data.data);

  return championArray;
});



const championsSlice = createSlice({
  name: 'champions',
  initialState: {
    championList: [],
    selectedPosition: '',
    searchTerm: '',
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedPosition: (state, action)=> {
      state.selectedPosition = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChampions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChampions.fulfilled, (state, action) => {
        state.loading = false;
        state.championList = action.payload;
      })
      .addCase(fetchChampions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {setSelectedPosition, setSearchTerm} = championsSlice.actions
export default championsSlice.reducer;